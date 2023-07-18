package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_FL.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyPAPIP_FL_ApplyDeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.PIPHousehold> implements productmodel.TypekeyPAPIP_FL_ApplyDeductibleType {
  public TypekeyPAPIP_FL_ApplyDeductibleTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_FL getCoverage() {
    return (productmodel.PAPIP_FL)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_FL getPAPIP_FL() {
    return (productmodel.PAPIP_FL)getClause();
  }
  
  
}