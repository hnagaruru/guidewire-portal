package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLArbitrationCond.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyGLArbitrationTypeTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.ArbitrationType> implements productmodel.TypekeyGLArbitrationTypeType {
  public TypekeyGLArbitrationTypeTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GLArbitrationCond getCondition() {
    return (productmodel.GLArbitrationCond)getClause();
  }
  
  @java.lang.Override
  public productmodel.GLArbitrationCond getGLArbitrationCond() {
    return (productmodel.GLArbitrationCond)getClause();
  }
  
  
}