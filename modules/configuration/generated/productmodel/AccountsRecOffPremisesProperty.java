package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/AccountsRecOffPremisesProperty.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class AccountsRecOffPremisesProperty extends entity.IMAccountsRecPartCov {
  protected AccountsRecOffPremisesProperty()  {
    super((java.lang.Void)null);
  }
  
  public AccountsRecOffPremisesProperty(entity.PolicyPeriod branch)  {
    super(branch, "AccountsRecOffPremisesProperty");
  }
  
  public AccountsRecOffPremisesProperty(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "AccountsRecOffPremisesProperty");
  }
  
  public productmodel.GenericAccountsRecOffPremisesPropertyDescriptionType getAccountsRecOffPremisesPropertyDescriptionTerm() {
    return (productmodel.GenericAccountsRecOffPremisesPropertyDescriptionType)getCovTerm("AccountsRecOffPremisesPropertyDescription");
  }
  
  public productmodel.DirectAccountsRecOffPremisesPropertyLimitType getAccountsRecOffPremisesPropertyLimitTerm() {
    return (productmodel.DirectAccountsRecOffPremisesPropertyLimitType)getCovTerm("AccountsRecOffPremisesPropertyLimit");
  }
  
  public boolean getHasAccountsRecOffPremisesPropertyDescriptionTerm() {
    return hasCovTerm("AccountsRecOffPremisesPropertyDescription");
  }
  
  public boolean getHasAccountsRecOffPremisesPropertyLimitTerm() {
    return hasCovTerm("AccountsRecOffPremisesPropertyLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.AccountsRecOffPremisesPropertyInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.AccountsRecOffPremisesProperty>() {
      public productmodel.AccountsRecOffPremisesProperty newEmptyInstance() {
        return new productmodel.AccountsRecOffPremisesProperty();
      }
      
      
    });
  }
}