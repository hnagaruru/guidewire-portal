package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLDeductible.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionGLPDDeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionGLPDDeductibleType> implements productmodel.OptionGLPDDeductibleType {
  public OptionGLPDDeductibleTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GLDeductible getCoverage() {
    return (productmodel.GLDeductible)getClause();
  }
  
  @java.lang.Override
  public productmodel.GLDeductible getGLDeductible() {
    return (productmodel.GLDeductible)getClause();
  }
  
  
}