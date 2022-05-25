describe("Testing the Setting bill function", function(){
    it(" Should be able to set the call cost", function(){
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());

        let settingsBill2 = billWithSettings();

        settingsBill2.setCallCost(7.85);
        assert.equal(7.85, settingsBill2.getCallCost());
    });

    it(" Should be able to set the Sms cost", function(){
        let settingsBill = billWithSettings();

        settingsBill.setSmsCost(0.85);
        assert.equal(0.85, settingsBill.getSmsCost());

        let settingsBill2 = billWithSettings();

        settingsBill2.setSmsCost(1.85);
        assert.equal(1.85, settingsBill2.getSmsCost());
    });

    it(" Should be able to set the calls and sms cost", function(){
        let settingsBill = billWithSettings();
        settingsBill.setSmsCost(0.75)
        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());
        assert.equal(0.75, settingsBill.getSmsCost());

        let settingsBill2 = billWithSettings();

        settingsBill2.setCallCost(7.85);
        settingsBill2.setSmsCost(1.50);
        assert.equal(7.85, settingsBill2.getCallCost());
        assert.equal(1.50, settingsBill2.getSmsCost());
    });

    it("Should be able to set warning level", function(){
        let settingsBill = billWithSettings();

        settingsBill.setWarningLevel(20);
        assert.equal(20, settingsBill.getWarningLevel());
    })

    it("Should be able to set critical level", function(){
        let settingsBill = billWithSettings();

        settingsBill.setCriticalLevel(25);
        assert.equal(25, settingsBill.getCriticalLevel());
    })
   //Using the values
    describe("Using the values", function(){
        it("Should be able to use the Call set values", function(){
            let settingsBill = billWithSettings();
    
            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(1.50);

            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(5, settingsBill.getTotalCost());
            assert.equal(5, settingsBill.getTotalCallCost());
            assert.equal(0, settingsBill.getTotalSmsCost());
        })

        it("Should be able to make two calls at 2.30", function(){
            let settingsBill = billWithSettings();
    
            settingsBill.setCallCost(2.30);

            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(4.60, settingsBill.getTotalCost());
            assert.equal(4.60, settingsBill.getTotalCallCost());
            assert.equal(0, settingsBill.getTotalSmsCost());
        })

        it("Should be able to send Sms's at R1.50 each", function(){
            let settingsBill = billWithSettings();
    
            settingsBill.setSmsCost(1.50);

            settingsBill.sendSms();
            settingsBill.sendSms();

            assert.equal(3, settingsBill.getTotalCost());
            assert.equal(0, settingsBill.getTotalCallCost());
            assert.equal(3, settingsBill.getTotalSmsCost());
        })

        it("Should be able to send Sms's at R1.50 each and make a Call at R2.50 same time", function(){
            let settingsBill = billWithSettings();
    
            settingsBill.setSmsCost(1.50);
            settingsBill.setCallCost(2.50);

            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.makeCall();

            assert.equal(5.50, settingsBill.getTotalCost());
            assert.equal(2.50, settingsBill.getTotalCallCost());
            assert.equal(3, settingsBill.getTotalSmsCost());
        })
    })

    describe("Should be able to Identify whether its Warning Level.", function(){
        it("Should be able to identify the Warning level when it at 10", function(){
            let settingsBill = billWithSettings();
    
            settingsBill.setSmsCost(1.50);
            settingsBill.setCallCost(2.50);
            settingsBill.setWarningLevel(10);

            
            
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            

            assert.equal(20.50, settingsBill.getTotalCost());
            assert.equal(17.50, settingsBill.getTotalCallCost());
            assert.equal(3, settingsBill.getTotalSmsCost());
            assert.equal("warning", settingsBill.identifyCondition());
        })
    });

    describe("Should be able to Identify whether its Critical Level.", function(){
        it("Should be able to identify the Critical level when it at 20", function(){
            let settingsBill = billWithSettings();
    
            settingsBill.setSmsCost(1.50);
            settingsBill.setCallCost(2.50);
            settingsBill.setCriticalLevel(20);

            
            
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.sendSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            

            assert.equal(39.50, settingsBill.getTotalCost());
            assert.equal(35, settingsBill.getTotalCallCost());
            assert.equal(4.5, settingsBill.getTotalSmsCost());
            assert.equal("danger", settingsBill.identifyCriticalCondition());
        })
    });

});