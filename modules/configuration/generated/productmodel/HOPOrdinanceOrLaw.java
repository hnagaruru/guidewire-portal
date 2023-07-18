package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPOrdinanceOrLaw.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPOrdinanceOrLaw extends entity.HOPDwellingCov {
  protected HOPOrdinanceOrLaw()  {
    super((java.lang.Void)null);
  }
  
  public HOPOrdinanceOrLaw(entity.PolicyPeriod branch)  {
    super(branch, "zi8gq0ddmt92f4efi0tqik4hgv8");
  }
  
  public HOPOrdinanceOrLaw(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zi8gq0ddmt92f4efi0tqik4hgv8");
  }
  
  public productmodel.OptionHOPOrdinanceOrLawLimitType getHOPOrdinanceOrLawLimitTerm() {
    return (productmodel.OptionHOPOrdinanceOrLawLimitType)getCovTerm("zecge7q4j80a91gemca3j496na8");
  }
  
  public boolean getHasHOPOrdinanceOrLawLimitTerm() {
    return hasCovTerm("zecge7q4j80a91gemca3j496na8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPOrdinanceOrLawInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPOrdinanceOrLaw>() {
      public productmodel.HOPOrdinanceOrLaw newEmptyInstance() {
        return new productmodel.HOPOrdinanceOrLaw();
      }
      
      
    });
  }
}