package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_NJ.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPNJ_MEDDEDUCTTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPNJ_MEDDEDUCTType> implements productmodel.OptionPIPNJ_MEDDEDUCTType {
  public OptionPIPNJ_MEDDEDUCTTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
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