package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PATowingLaborCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionTowingAndLaborLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionTowingAndLaborLimitType> implements productmodel.OptionTowingAndLaborLimitType {
  public OptionTowingAndLaborLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PATowingLaborCov getCoverage() {
    return (productmodel.PATowingLaborCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PATowingLaborCov getPATowingLaborCov() {
    return (productmodel.PATowingLaborCov)getClause();
  }
  
  
}