package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_MI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPMI_DEDUCTIBLETypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPMI_DEDUCTIBLEType> implements productmodel.OptionPIPMI_DEDUCTIBLEType {
  public OptionPIPMI_DEDUCTIBLETypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_MI getCAPIP_MI() {
    return (productmodel.CAPIP_MI)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_MI getCoverage() {
    return (productmodel.CAPIP_MI)getClause();
  }
  
  
}