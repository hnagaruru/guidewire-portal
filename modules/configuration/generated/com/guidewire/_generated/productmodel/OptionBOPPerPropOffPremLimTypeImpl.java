package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPersPropOffPrem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPPerPropOffPremLimTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPPerPropOffPremLimType> implements productmodel.OptionBOPPerPropOffPremLimType {
  public OptionBOPPerPropOffPremLimTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPPersPropOffPrem getBOPPersPropOffPrem() {
    return (productmodel.BOPPersPropOffPrem)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPPersPropOffPrem getCoverage() {
    return (productmodel.BOPPersPropOffPrem)getClause();
  }
  
  
}