package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPComputerFraudCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPComputerFraudLimTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPComputerFraudLimType> implements productmodel.OptionBOPComputerFraudLimType {
  public OptionBOPComputerFraudLimTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPComputerFraudCov getBOPComputerFraudCov() {
    return (productmodel.BOPComputerFraudCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPComputerFraudCov getCoverage() {
    return (productmodel.BOPComputerFraudCov)getClause();
  }
  
  
}