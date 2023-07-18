package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPMoneySecCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPMoneyOffPremLimTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPMoneyOffPremLimType> implements productmodel.OptionBOPMoneyOffPremLimType {
  public OptionBOPMoneyOffPremLimTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPMoneySecCov getBOPMoneySecCov() {
    return (productmodel.BOPMoneySecCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPMoneySecCov getCoverage() {
    return (productmodel.BOPMoneySecCov)getClause();
  }
  
  
}