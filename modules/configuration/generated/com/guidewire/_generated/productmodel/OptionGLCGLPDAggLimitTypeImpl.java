package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLCGLCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionGLCGLPDAggLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionGLCGLPDAggLimitType> implements productmodel.OptionGLCGLPDAggLimitType {
  public OptionGLCGLPDAggLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GLCGLCov getCoverage() {
    return (productmodel.GLCGLCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.GLCGLCov getGLCGLCov() {
    return (productmodel.GLCGLCov)getClause();
  }
  
  
}