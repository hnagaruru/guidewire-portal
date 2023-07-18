package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPharmacistCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPPhamacistSalesTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPPhamacistSalesType {
  public DirectBOPPhamacistSalesTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPPharmacistCov getBOPPharmacistCov() {
    return (productmodel.BOPPharmacistCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPPharmacistCov getCoverage() {
    return (productmodel.BOPPharmacistCov)getClause();
  }
  
  
}