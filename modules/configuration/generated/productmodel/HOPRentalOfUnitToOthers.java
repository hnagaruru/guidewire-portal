package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPRentalOfUnitToOthers.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPRentalOfUnitToOthers extends entity.HOPDwellingCond {
  protected HOPRentalOfUnitToOthers()  {
    super((java.lang.Void)null);
  }
  
  public HOPRentalOfUnitToOthers(entity.PolicyPeriod branch)  {
    super(branch, "zb6h6c469lfch616h0vthd9huaa");
  }
  
  public HOPRentalOfUnitToOthers(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zb6h6c469lfch616h0vthd9huaa");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPRentalOfUnitToOthersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPRentalOfUnitToOthers>() {
      public productmodel.HOPRentalOfUnitToOthers newEmptyInstance() {
        return new productmodel.HOPRentalOfUnitToOthers();
      }
      
      
    });
  }
}