package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_KY.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericKYPIP_MotorcylceTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericKYPIP_MotorcylceType {
  public GenericKYPIP_MotorcylceTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_KY getCAPIP_KY() {
    return (productmodel.CAPIP_KY)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_KY getCoverage() {
    return (productmodel.CAPIP_KY)getClause();
  }
  
  
}