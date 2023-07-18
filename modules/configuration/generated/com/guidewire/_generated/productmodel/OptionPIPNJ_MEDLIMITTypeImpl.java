package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_NJ.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPNJ_MEDLIMITTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPNJ_MEDLIMITType> implements productmodel.OptionPIPNJ_MEDLIMITType {
  public OptionPIPNJ_MEDLIMITTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
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