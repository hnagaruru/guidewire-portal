package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/AggLimitsLocationProject.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyAggLimitApplicabilityTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.AggregateLimits> implements productmodel.TypekeyAggLimitApplicabilityType {
  public TypekeyAggLimitApplicabilityTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.AggLimitsLocationProject getAggLimitsLocationProject() {
    return (productmodel.AggLimitsLocationProject)getClause();
  }
  
  @java.lang.Override
  public productmodel.AggLimitsLocationProject getCondition() {
    return (productmodel.AggLimitsLocationProject)getClause();
  }
  
  
}