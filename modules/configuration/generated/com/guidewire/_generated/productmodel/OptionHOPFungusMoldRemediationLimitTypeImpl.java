package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPFungusMoldRemediation.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPFungusMoldRemediationLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPFungusMoldRemediationLimitType> implements productmodel.OptionHOPFungusMoldRemediationLimitType {
  public OptionHOPFungusMoldRemediationLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPFungusMoldRemediation getCoverage() {
    return (productmodel.HOPFungusMoldRemediation)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPFungusMoldRemediation getHOPFungusMoldRemediation() {
    return (productmodel.HOPFungusMoldRemediation)getClause();
  }
  
  
}