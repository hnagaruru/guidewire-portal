package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAExcessElectronicsCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAExcessElectronicsLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAExcessElectronicsLimitType> implements productmodel.OptionPAExcessElectronicsLimitType {
  public OptionPAExcessElectronicsLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAExcessElectronicsCov getCoverage() {
    return (productmodel.PAExcessElectronicsCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAExcessElectronicsCov getPAExcessElectronicsCov() {
    return (productmodel.PAExcessElectronicsCov)getClause();
  }
  
  
}