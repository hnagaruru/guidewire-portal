package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAUIMPDCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPAUIMPDstackTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPAUIMPDstackType {
  public GenericPAUIMPDstackTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAUIMPDCov getCoverage() {
    return (productmodel.PAUIMPDCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAUIMPDCov getPAUIMPDCov() {
    return (productmodel.PAUIMPDCov)getClause();
  }
  
  
}