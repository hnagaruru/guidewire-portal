package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLUndergroundResourceCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectGLUndergroundResourceLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectGLUndergroundResourceLimitType {
  public DirectGLUndergroundResourceLimitTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GLUndergroundResourceCov getCoverage() {
    return (productmodel.GLUndergroundResourceCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.GLUndergroundResourceCov getGLUndergroundResourceCov() {
    return (productmodel.GLUndergroundResourceCov)getClause();
  }
  
  
}