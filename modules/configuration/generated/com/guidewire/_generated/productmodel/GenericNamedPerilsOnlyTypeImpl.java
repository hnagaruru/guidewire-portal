package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLPollutionShortTermCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericNamedPerilsOnlyTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericNamedPerilsOnlyType {
  public GenericNamedPerilsOnlyTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GLPollutionShortTermCov getCoverage() {
    return (productmodel.GLPollutionShortTermCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.GLPollutionShortTermCov getGLPollutionShortTermCov() {
    return (productmodel.GLPollutionShortTermCov)getClause();
  }
  
  
}