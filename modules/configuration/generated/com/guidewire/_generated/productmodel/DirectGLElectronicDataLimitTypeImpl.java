package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLElectronicDataLiability.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectGLElectronicDataLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectGLElectronicDataLimitType {
  public DirectGLElectronicDataLimitTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GLElectronicDataLiability getCoverage() {
    return (productmodel.GLElectronicDataLiability)getClause();
  }
  
  @java.lang.Override
  public productmodel.GLElectronicDataLiability getGLElectronicDataLiability() {
    return (productmodel.GLElectronicDataLiability)getClause();
  }
  
  
}