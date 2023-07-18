package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAUMPDCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPAUMPDstackedTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPAUMPDstackedType {
  public GenericPAUMPDstackedTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAUMPDCov getCoverage() {
    return (productmodel.PAUMPDCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAUMPDCov getPAUMPDCov() {
    return (productmodel.PAUMPDCov)getClause();
  }
  
  
}