package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/AggLimitsLocationProject.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericAggLimitLocProjectDescriptionTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericAggLimitLocProjectDescriptionType {
  public GenericAggLimitLocProjectDescriptionTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
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