package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_MI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPMI_SERVICESTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPMI_SERVICESType> implements productmodel.OptionPIPMI_SERVICESType {
  public OptionPIPMI_SERVICESTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
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