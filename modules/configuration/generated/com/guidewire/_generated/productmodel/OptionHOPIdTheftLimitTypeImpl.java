package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPIdTheft.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPIdTheftLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPIdTheftLimitType> implements productmodel.OptionHOPIdTheftLimitType {
  public OptionHOPIdTheftLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPIdTheft getCoverage() {
    return (productmodel.HOPIdTheft)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPIdTheft getHOPIdTheft() {
    return (productmodel.HOPIdTheft)getClause();
  }
  
  
}