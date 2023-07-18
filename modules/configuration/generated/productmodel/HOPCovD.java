package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCovD.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPCovD extends entity.HOPDwellingCov {
  protected HOPCovD()  {
    super((java.lang.Void)null);
  }
  
  public HOPCovD(entity.PolicyPeriod branch)  {
    super(branch, "zpsii9qu58bma5eju8f5pgi0brb");
  }
  
  public HOPCovD(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zpsii9qu58bma5eju8f5pgi0brb");
  }
  
  public productmodel.DirectHOPCovDDirectLimitType getHOPCovDDirectLimitTerm() {
    return (productmodel.DirectHOPCovDDirectLimitType)getCovTerm("zgghesfp77k231ct483vgs9f7ub");
  }
  
  public productmodel.OptionHOPCovDLimitType getHOPCovDLimitTerm() {
    return (productmodel.OptionHOPCovDLimitType)getCovTerm("zccjq08o5p47o1msqlbef57be2b");
  }
  
  public productmodel.GenericHOPCovDLossOfRentType getHOPCovDLossOfRentTerm() {
    return (productmodel.GenericHOPCovDLossOfRentType)getCovTerm("zmjhmpiqq348g1i0gqgsdhhh9q9");
  }
  
  public productmodel.OptionHOPCovDProhibitedUseType getHOPCovDProhibitedUseTerm() {
    return (productmodel.OptionHOPCovDProhibitedUseType)getCovTerm("zdbiq4n6t22tqdq906jh6k5sbb9");
  }
  
  public boolean getHasHOPCovDDirectLimitTerm() {
    return hasCovTerm("zgghesfp77k231ct483vgs9f7ub");
  }
  
  public boolean getHasHOPCovDLimitTerm() {
    return hasCovTerm("zccjq08o5p47o1msqlbef57be2b");
  }
  
  public boolean getHasHOPCovDLossOfRentTerm() {
    return hasCovTerm("zmjhmpiqq348g1i0gqgsdhhh9q9");
  }
  
  public boolean getHasHOPCovDProhibitedUseTerm() {
    return hasCovTerm("zdbiq4n6t22tqdq906jh6k5sbb9");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPCovDInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPCovD>() {
      public productmodel.HOPCovD newEmptyInstance() {
        return new productmodel.HOPCovD();
      }
      
      
    });
  }
}