package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_OR.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPIPOR_MEDTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPIPOR_MEDType> implements productmodel.OptionPIPOR_MEDType {
  public OptionPIPOR_MEDTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
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