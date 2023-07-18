package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPLossAssessment.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPLossAssessmentLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPLossAssessmentLimitType> implements productmodel.OptionHOPLossAssessmentLimitType {
  public OptionHOPLossAssessmentLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPLossAssessment getCoverage() {
    return (productmodel.HOPLossAssessment)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPLossAssessment getHOPLossAssessment() {
    return (productmodel.HOPLossAssessment)getClause();
  }
  
  
}