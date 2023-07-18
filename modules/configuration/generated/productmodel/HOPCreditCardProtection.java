package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCreditCardProtection.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPCreditCardProtection extends entity.HOPLineCov {
  protected HOPCreditCardProtection()  {
    super((java.lang.Void)null);
  }
  
  public HOPCreditCardProtection(entity.PolicyPeriod branch)  {
    super(branch, "zu4gq88v6fqir3hpdsamf12gu2a");
  }
  
  public HOPCreditCardProtection(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zu4gq88v6fqir3hpdsamf12gu2a");
  }
  
  public productmodel.OptionHOPCreditCardProtectionLimitType getHOPCreditCardProtectionLimitTerm() {
    return (productmodel.OptionHOPCreditCardProtectionLimitType)getCovTerm("z11jolhuvvubg9sscbpd6mcs4i8");
  }
  
  public boolean getHasHOPCreditCardProtectionLimitTerm() {
    return hasCovTerm("z11jolhuvvubg9sscbpd6mcs4i8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPCreditCardProtectionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPCreditCardProtection>() {
      public productmodel.HOPCreditCardProtection newEmptyInstance() {
        return new productmodel.HOPCreditCardProtection();
      }
      
      
    });
  }
}