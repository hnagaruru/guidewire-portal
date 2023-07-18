package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPPersonalPropertyOffPremises.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPPersonalPropertyOffPremises extends entity.HOPDwellingCov {
  protected HOPPersonalPropertyOffPremises()  {
    super((java.lang.Void)null);
  }
  
  public HOPPersonalPropertyOffPremises(entity.PolicyPeriod branch)  {
    super(branch, "z8oh0o5asbk8g9v4bspvmgpq3k9");
  }
  
  public HOPPersonalPropertyOffPremises(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z8oh0o5asbk8g9v4bspvmgpq3k9");
  }
  
  public productmodel.OptionHOPPersonalPropertyOffPremisesLimitType getHOPPersonalPropertyOffPremisesLimitTerm() {
    return (productmodel.OptionHOPPersonalPropertyOffPremisesLimitType)getCovTerm("zb7ju1l6o4fggbmkbf8dmq3qps9");
  }
  
  public boolean getHasHOPPersonalPropertyOffPremisesLimitTerm() {
    return hasCovTerm("zb7ju1l6o4fggbmkbf8dmq3qps9");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPPersonalPropertyOffPremisesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPPersonalPropertyOffPremises>() {
      public productmodel.HOPPersonalPropertyOffPremises newEmptyInstance() {
        return new productmodel.HOPPersonalPropertyOffPremises();
      }
      
      
    });
  }
}