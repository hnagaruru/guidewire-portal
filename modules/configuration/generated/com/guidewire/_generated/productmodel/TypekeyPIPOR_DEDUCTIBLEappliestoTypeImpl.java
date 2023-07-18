package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_OR.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyPIPOR_DEDUCTIBLEappliestoTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.PIPHousehold> implements productmodel.TypekeyPIPOR_DEDUCTIBLEappliestoType {
  public TypekeyPIPOR_DEDUCTIBLEappliestoTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_OR getCAPIP_OR() {
    return (productmodel.CAPIP_OR)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_OR getCoverage() {
    return (productmodel.CAPIP_OR)getClause();
  }
  
  
}