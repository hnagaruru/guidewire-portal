package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_ND.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionCAPIP_ND_MEDICALTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionCAPIP_ND_MEDICALType> implements productmodel.OptionCAPIP_ND_MEDICALType {
  public OptionCAPIP_ND_MEDICALTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_ND getCAPIP_ND() {
    return (productmodel.CAPIP_ND)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_ND getCoverage() {
    return (productmodel.CAPIP_ND)getClause();
  }
  
  
}