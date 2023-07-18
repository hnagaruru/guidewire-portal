package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_WA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPWA_INCOMETypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPWA_INCOMEType> implements productmodel.OptionPIPWA_INCOMEType {
  public OptionPIPWA_INCOMETypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_WA getCAPIP_WA() {
    return (productmodel.CAPIP_WA)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_WA getCoverage() {
    return (productmodel.CAPIP_WA)getClause();
  }
  
  
}