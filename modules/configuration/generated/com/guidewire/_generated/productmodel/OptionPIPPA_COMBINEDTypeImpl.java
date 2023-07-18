package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_PA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPPA_COMBINEDTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPPA_COMBINEDType> implements productmodel.OptionPIPPA_COMBINEDType {
  public OptionPIPPA_COMBINEDTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_PA getCAPIP_PA() {
    return (productmodel.CAPIP_PA)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_PA getCoverage() {
    return (productmodel.CAPIP_PA)getClause();
  }
  
  
}