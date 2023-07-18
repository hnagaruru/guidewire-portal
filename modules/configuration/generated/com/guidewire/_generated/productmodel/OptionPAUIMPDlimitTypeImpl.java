package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAUIMPDCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAUIMPDlimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAUIMPDlimitType> implements productmodel.OptionPAUIMPDlimitType {
  public OptionPAUIMPDlimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAUIMPDCov getCoverage() {
    return (productmodel.PAUIMPDCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAUIMPDCov getPAUIMPDCov() {
    return (productmodel.PAUIMPDCov)getClause();
  }
  
  
}