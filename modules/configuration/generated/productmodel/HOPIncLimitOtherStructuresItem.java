package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPIncLimitOtherStructuresItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPIncLimitOtherStructuresItem extends entity.HOPDwellSchCovItemCov {
  protected HOPIncLimitOtherStructuresItem()  {
    super((java.lang.Void)null);
  }
  
  public HOPIncLimitOtherStructuresItem(entity.PolicyPeriod branch)  {
    super(branch, "z1fhulh3d21qr4o5ktk2e54ndpb");
  }
  
  public HOPIncLimitOtherStructuresItem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z1fhulh3d21qr4o5ktk2e54ndpb");
  }
  
  public productmodel.DirectHOPIncLimitOtherStructuresItemLimitType getHOPIncLimitOtherStructuresItemLimitTerm() {
    return (productmodel.DirectHOPIncLimitOtherStructuresItemLimitType)getCovTerm("zagjum6b0mkagbks5gmb3gc58vb");
  }
  
  public boolean getHasHOPIncLimitOtherStructuresItemLimitTerm() {
    return hasCovTerm("zagjum6b0mkagbks5gmb3gc58vb");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPIncLimitOtherStructuresItemInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPIncLimitOtherStructuresItem>() {
      public productmodel.HOPIncLimitOtherStructuresItem newEmptyInstance() {
        return new productmodel.HOPIncLimitOtherStructuresItem();
      }
      
      
    });
  }
}