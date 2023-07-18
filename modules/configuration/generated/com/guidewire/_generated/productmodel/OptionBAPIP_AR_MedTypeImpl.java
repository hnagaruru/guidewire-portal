package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CA_PIP_AR.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBAPIP_AR_MedTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBAPIP_AR_MedType> implements productmodel.OptionBAPIP_AR_MedType {
  public OptionBAPIP_AR_MedTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CA_PIP_AR getCA_PIP_AR() {
    return (productmodel.CA_PIP_AR)getClause();
  }
  
  @java.lang.Override
  public productmodel.CA_PIP_AR getCoverage() {
    return (productmodel.CA_PIP_AR)getClause();
  }
  
  
}