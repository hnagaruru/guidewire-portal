package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CA_PIP_DC.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBAPIP_DC_MedicalTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBAPIP_DC_MedicalType> implements productmodel.OptionBAPIP_DC_MedicalType {
  public OptionBAPIP_DC_MedicalTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CA_PIP_DC getCA_PIP_DC() {
    return (productmodel.CA_PIP_DC)getClause();
  }
  
  @java.lang.Override
  public productmodel.CA_PIP_DC getCoverage() {
    return (productmodel.CA_PIP_DC)getClause();
  }
  
  
}