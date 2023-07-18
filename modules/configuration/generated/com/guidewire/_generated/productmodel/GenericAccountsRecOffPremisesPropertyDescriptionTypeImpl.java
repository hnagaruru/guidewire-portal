package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/AccountsRecOffPremisesProperty.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericAccountsRecOffPremisesPropertyDescriptionTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericAccountsRecOffPremisesPropertyDescriptionType {
  public GenericAccountsRecOffPremisesPropertyDescriptionTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.AccountsRecOffPremisesProperty getAccountsRecOffPremisesProperty() {
    return (productmodel.AccountsRecOffPremisesProperty)getClause();
  }
  
  @java.lang.Override
  public productmodel.AccountsRecOffPremisesProperty getCoverage() {
    return (productmodel.AccountsRecOffPremisesProperty)getClause();
  }
  
  
}