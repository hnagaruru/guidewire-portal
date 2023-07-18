package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_FL.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyCAPIP_FL_ApplyDeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.PIPHousehold> implements productmodel.TypekeyCAPIP_FL_ApplyDeductibleType {
  public TypekeyCAPIP_FL_ApplyDeductibleTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_FL getCAPIP_FL() {
    return (productmodel.CAPIP_FL)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_FL getCoverage() {
    return (productmodel.CAPIP_FL)getClause();
  }
  
  
}