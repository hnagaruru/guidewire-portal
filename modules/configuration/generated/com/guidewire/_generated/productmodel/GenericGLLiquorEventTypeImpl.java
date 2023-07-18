package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLLiquorEndorsement.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericGLLiquorEventTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericGLLiquorEventType {
  public GenericGLLiquorEventTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GLLiquorEndorsement getCoverage() {
    return (productmodel.GLLiquorEndorsement)getClause();
  }
  
  @java.lang.Override
  public productmodel.GLLiquorEndorsement getGLLiquorEndorsement() {
    return (productmodel.GLLiquorEndorsement)getClause();
  }
  
  
}