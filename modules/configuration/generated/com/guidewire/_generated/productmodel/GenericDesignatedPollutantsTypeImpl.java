package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLPollutionDesignatedCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericDesignatedPollutantsTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericDesignatedPollutantsType {
  public GenericDesignatedPollutantsTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GLPollutionDesignatedCov getCoverage() {
    return (productmodel.GLPollutionDesignatedCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.GLPollutionDesignatedCov getGLPollutionDesignatedCov() {
    return (productmodel.GLPollutionDesignatedCov)getClause();
  }
  
  
}