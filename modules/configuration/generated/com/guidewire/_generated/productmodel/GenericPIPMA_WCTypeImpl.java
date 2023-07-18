package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_MA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPIPMA_WCTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPIPMA_WCType {
  public GenericPIPMA_WCTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_MA getCAPIP_MA() {
    return (productmodel.CAPIP_MA)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_MA getCoverage() {
    return (productmodel.CAPIP_MA)getClause();
  }
  
  
}