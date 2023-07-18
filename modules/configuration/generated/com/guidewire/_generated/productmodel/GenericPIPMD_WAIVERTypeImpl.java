package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_MD.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPIPMD_WAIVERTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPIPMD_WAIVERType {
  public GenericPIPMD_WAIVERTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_MD getCAPIP_MD() {
    return (productmodel.CAPIP_MD)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_MD getCoverage() {
    return (productmodel.CAPIP_MD)getClause();
  }
  
  
}