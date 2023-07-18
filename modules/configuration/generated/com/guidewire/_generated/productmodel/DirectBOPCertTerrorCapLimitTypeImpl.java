package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPCertTerrorCap.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPCertTerrorCapLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPCertTerrorCapLimitType {
  public DirectBOPCertTerrorCapLimitTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPCertTerrorCap getBOPCertTerrorCap() {
    return (productmodel.BOPCertTerrorCap)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPCertTerrorCap getCoverage() {
    return (productmodel.BOPCertTerrorCap)getClause();
  }
  
  
}