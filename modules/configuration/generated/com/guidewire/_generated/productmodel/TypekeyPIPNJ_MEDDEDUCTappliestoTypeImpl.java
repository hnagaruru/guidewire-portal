package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_NJ.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyPIPNJ_MEDDEDUCTappliestoTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.PIPHousehold> implements productmodel.TypekeyPIPNJ_MEDDEDUCTappliestoType {
  public TypekeyPIPNJ_MEDDEDUCTappliestoTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_NJ getCAPIP_NJ() {
    return (productmodel.CAPIP_NJ)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_NJ getCoverage() {
    return (productmodel.CAPIP_NJ)getClause();
  }
  
  
}