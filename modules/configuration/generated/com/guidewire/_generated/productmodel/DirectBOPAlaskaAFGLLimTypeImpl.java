package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPAlaskaAFGLCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPAlaskaAFGLLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPAlaskaAFGLLimType {
  public DirectBOPAlaskaAFGLLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPAlaskaAFGLCov getBOPAlaskaAFGLCov() {
    return (productmodel.BOPAlaskaAFGLCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPAlaskaAFGLCov getCoverage() {
    return (productmodel.BOPAlaskaAFGLCov)getClause();
  }
  
  
}