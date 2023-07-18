package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLLimitedPAandInjuryCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericGLLimitedPAandInjuryCovDescriptionTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericGLLimitedPAandInjuryCovDescriptionType {
  public GenericGLLimitedPAandInjuryCovDescriptionTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GLLimitedPAandInjuryCov getCoverage() {
    return (productmodel.GLLimitedPAandInjuryCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.GLLimitedPAandInjuryCov getGLLimitedPAandInjuryCov() {
    return (productmodel.GLLimitedPAandInjuryCov)getClause();
  }
  
  
}