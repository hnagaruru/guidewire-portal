package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPMedExpCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPMedExpenseLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPMedExpenseLimitType> implements productmodel.OptionBOPMedExpenseLimitType {
  public OptionBOPMedExpenseLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPMedExpCov getBOPMedExpCov() {
    return (productmodel.BOPMedExpCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPMedExpCov getCoverage() {
    return (productmodel.BOPMedExpCov)getClause();
  }
  
  
}