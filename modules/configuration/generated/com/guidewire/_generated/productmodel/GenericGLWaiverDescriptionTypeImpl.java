package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLWaiveSubrogation.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericGLWaiverDescriptionTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericGLWaiverDescriptionType {
  public GenericGLWaiverDescriptionTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GLWaiveSubrogation getCondition() {
    return (productmodel.GLWaiveSubrogation)getClause();
  }
  
  @java.lang.Override
  public productmodel.GLWaiveSubrogation getGLWaiveSubrogation() {
    return (productmodel.GLWaiveSubrogation)getClause();
  }
  
  
}